interface Window {
  google?: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string;
          callback: (response: any) => void;
          ux_mode?: string;
        }) => void;
        renderButton: (
          element: HTMLElement | null,
          options: {
            theme?: 'filled_blue' | 'filled_black' | 'outline';
            size?: 'small' | 'medium' | 'large';
            text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
            shape?: 'rectangular' | 'pill' | 'circle' | 'square';
            logo_alignment?: 'left' | 'center';
            width?: number | string;
            locale?: string;
          }
        ) => void;
        prompt: (notification?: { type: string }) => void;
      };
    };
  };
}