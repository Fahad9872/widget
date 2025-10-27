import { useContext } from 'react';
import { WidgetContext } from '../lib/context';

export function Widget() {
  const { isOpen, setIsOpen } = useContext(WidgetContext);

  if (!isOpen) {
    return (
      <button
        className='fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition widget-button'
        onClick={() => setIsOpen(true)}
      >
        Open Widget
      </button>
    );
  }

  return (
    <div className='fixed bottom-5 right-5 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200'>
      <div className='flex justify-between items-center bg-blue-600 text-white px-4 py-2'>
        <h3 className='text-lg font-semibold'>Widget Title</h3>
        <button
          className='text-white hover:text-gray-200 transition'
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>

      <div className='p-4 text-gray-700'>
        {/* Your widget content goes here */}
        <p>This is your widget content area. Add whatever you need here.</p>
      </div>
    </div>
  );
}
