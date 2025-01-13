import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCardHook } from '../../hooks/useCardHook';

const EditWindow = ({ open, onClose, cardId, initialData }) => {
    const { updateCard } = useCardHook();

    const [title, setTitle] = useState(initialData?.title || '');
    const [description, setDescription] = useState(initialData?.description || '');

    const handleSubmit = async () => {
        try {
            const updatedData = { title, description };
            

            const response = await fetch(`/api/cards/${cardId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error(`Failed to update card: ${response.statusText}`);
            }

            const data = await response.json();
            updateCard(data);
            console.log('Card updated successfully:', data);

            // Close the modal after successful submission
            onClose();
        } catch (error) {
            console.error('Error updating card:', error.message);
            alert('Failed to update card.');
        }
    };

    return (
        <div
            onClick={onClose}
            className={`relative inset-0 flex justify-center items-center 
            transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl shadow p-6 transition-all 
                ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-red-400"
                >
                    <X />
                </button>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border-b-2 text-black border-gray-400 focus:outline-none focus:border-emerald-400 mb-4"
                    placeholder="Title"
                />

                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border-b-2 text-black border-gray-400 focus:outline-none focus:border-emerald-400"
                    placeholder="Description"
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-emerald-600 text-white rounded-lg p-2 mt-4 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditWindow;
