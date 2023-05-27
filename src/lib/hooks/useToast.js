import Toast from '../components/Toast.svelte';

/**
 *
 * @param {string} emoji
 * @param {string} message
 * @param {number} [duration=3000]
 */
export default function useToast(emoji, message, duration = 3000) {
	const id = Math.random().toString(36).slice(2, 7);

	new Toast({
		props: {
			emoji,
			message,
			id,
			class: 'transition-all duration-[400ms] ease-in-out opacity-0 relative'
		},
		target: document.getElementById('toast-container')
	});

	const toast = document.getElementById(id);

	setTimeout(() => {
		// fade-in
		toast.classList.remove('opacity-0');
		toast.classList.add('opacity-100');
	}, 1);

	setTimeout(() => {
		//fade-out
		toast.classList.remove('opacity-100');
		toast.classList.add('opacity-0');

		// remove element after animation
		setTimeout(() => {
			toast.remove();
		}, 400);
	}, duration);
}
