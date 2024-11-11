export function getAuthData(){
    
}

export const retrieveUserData = () => {
    // Retrieve token and user info from localStorage
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
    return { token, user };
};