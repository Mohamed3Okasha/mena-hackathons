import React, { useState } from 'react';

interface TeamJoinCreateProps {
  method: 'code' | 'email' | 'create';
}

export function TeamJoinCreate({ method }: TeamJoinCreateProps) {
  const [value, setValue] = useState('');

  const getPlaceholder = () => {
    switch (method) {
      case 'code':
        return 'Enter team code';
      case 'email':
        return 'Enter email address';
      case 'create':
        return 'Enter team name';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle team join/create logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex space-x-2">
        <input
          type={method === 'email' ? 'email' : 'text'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={getPlaceholder()}
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-primary rounded-lg hover:bg-primary/[.9]"
        >
          {method === 'create' ? 'Create' : 'Join'}
        </button>
      </div>
    </form>
  );
}