import { useState } from 'react';

export default function Form() {
  const [hasPreapproval, setHasPreapproval] = useState('');
  const [budget, setBudget] = useState('');
  const formatPhone = (value : string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;

    let result = '';
    if (match[1]) result += `(${match[1]}`;
    if (match[2]) result += `) ${match[2]}`;
    if (match[3]) result += `-${match[3]}`;
    return result;
  };

  const formatBudget = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const [ phone, setPhone ] = useState('');

  return (
    <form className="space-y-8" method="POST" action="https://formspree.io/f/your-form-id">
      <input type="hidden" name="_replyto" value="" />
      <div className="border-b border-gray-900/10 pb-8">
        <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              maxLength={14}
              autoComplete="tel"
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
                    <div>
            <label htmlFor="city-state" className="block text-sm font-medium text-gray-900">
              City, State
            </label>
            <input
              id="city-state"
              name="city-state"
              type="text"
              autoComplete="city-state"
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Do you have an existing preapproval?
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-md border ${
                hasPreapproval === 'yes' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setHasPreapproval('yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md border ${
                hasPreapproval === 'no' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setHasPreapproval('no')}
            >
              No
            </button>
          </div>
        </div>
        {hasPreapproval === 'yes' && (
          <div className="mt-6">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-900">
              If yes, what is your budget?
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              inputMode="numeric"
              value={budget}
              onChange={(e) => setBudget(formatBudget(e.target.value))}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        )}
        <div className="mt-6">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-900">
            Additional comments or questions
          </label>
          <textarea
            id="comments"
            name="comments"
            rows={4}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="flex justify-end gap-x-4">
        <button type="reset" className="text-sm font-semibold text-gray-900">
          Cancel
        </button>
        <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-black shadow-md hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Submit
        </button>
      </div>
    </form>
  );
}