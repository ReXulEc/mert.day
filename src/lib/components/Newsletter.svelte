<script>
	import Inbox from '../images/inbox.png';
	import useToast from '../hooks/useToast';

	/**
	 * @type {'production'|'development'}
	 */
	const mode = import.meta.env.MODE;

	const getAPIURL = () => {
		return mode === 'development' ? 'http://localhost:3000' : 'https://api.mert.day';
	};

	/**
	 * @type {string}
	 */
	let email = '';

	async function sendMail() {
		fetch(`${getAPIURL()}/mail`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify({ email })
		})
			.then(async (response) => {
				const message = await response.text();
				const isSuccess = response.status === 200;

				useToast(isSuccess ? '👋' : '❌', message);
			})
			.catch(() => {
				useToast('❌', 'An error occurred');
			});
	}
</script>

<div class="flex bg-[#808080]/5 w-full p-6 rounded-3xl gap-10 justify-between">
	<div class="space-y-1.5 flex flex-col md:w-3/4">
		<p>Sign up to my newsletter</p>
		<p class="texts-07">I regularly share my professional or personal updates on substack!</p>
		<form on:submit|preventDefault={sendMail} class="flex space-x-2">
			<input
				class="bg-[#4F4F4F] p-3 w-full rounded-lg ring-0 placeholder-white/50 flex text-white outline-none"
				placeholder="Enter your email address"
				type="email"
				bind:value={email}
				required
			/>
			<button class="bg-[#4F4F4F] p-3 px-7 rounded-lg text-white flex">Subscribe</button>
		</form>
	</div>
	<div
		class="md:flex hidden justify-center items-center bg-[#808080]/5 rounded-2xl w-[108px] h-[108px] my-auto"
	>
		<img class="h-7 w-7" src={Inbox} alt="" />
	</div>
</div>
