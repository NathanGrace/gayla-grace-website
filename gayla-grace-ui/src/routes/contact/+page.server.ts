import { fail, type Actions } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090'); // Your PocketBase URL

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const email = data.get('email') as string;
        const name = data.get('name') as string;
        const message = data.get('message') as string;

        // Basic validation
        if (!email || !name || !message) {
            return fail(400, {
                error: 'All fields are required',
                email,
                name,
                message
            });
        }

        const formData: ContactFormData = {
            name,
            email,
            message,
        };
        await pb.collection('contact_forms').create(formData);
    }
} satisfies Actions;