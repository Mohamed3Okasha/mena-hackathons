type User = {
  firstName: string;
  lastName: string;
  email: string;
};
export const storeUserData = ({
    language,
    token,
    user,
  }: {
    language?: string;
    token?: string;
    user?: User;
  }) => {
    // Store token and user info in localStorage
    if(language) localStorage.setItem('language', language);
    if(token) localStorage.setItem('authToken', token);
    if(user) localStorage.setItem('user', JSON.stringify(user));
};

export const retrieveUserData = () => {
    // Retrieve token and user info from localStorage
    const language = localStorage.getItem('language');
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
    return { language, token, user };
};