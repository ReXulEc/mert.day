<script>
	import Inbox from '../images/inbox.png';
	import useToast from '../hooks/useToast';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let visStyle = 'opacity-0 blur-lg'
	let blurStyle = 'blur-0'
	let buttonDisabled = false;

	/**
	 * @type {'production'|'development'}
	 */
	const mode = import.meta.env.MODE;

	const getAPIURL = () => {
		return mode === 'development' ? 'http://localhost:4000' : 'https://api.mert.day';
	};

	/**
	 * @type {string}
	 */
	let email = '';

	async function sendMail() {
		fetch(`${getAPIURL()}/sendMail`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify({ email })
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message = "Confirm your email address to subscribe.") {
					blurStyle = 'blur-lg'
					visStyle = 'opacity-100 blur-0'
					buttonDisabled = true;
				} else {
					useToast(data.success ? '👋' : '❌', data.message);
				}
			})
			.catch((err) => {
				useToast('❌', err);
			});
	}

	onMount(() => {
		if ($page.url.searchParams.get('mailconfirm') === 'true') {
			useToast('👋', 'You have successfully subscribed to my newsletter!');
		}
	});
</script>

<div class="relative bg-[#808080]/5 p-6 rounded-3xl">
	<div class="flex h-full w-full items-center justify-center">
		<div class=" absolute flex flex-col items-center {visStyle} transition-all duration-500 vertical-center">
			<p class="font-bold text-white text-center text-[1.5rem]">Check your mailbox!</p>
			<p class="opacity-70 text-center w-11/12">
				We've sent you an email in order for you to confirm your newsletter subscription.
			</p>
		</div>
	</div>
		<div class="flex w-full gap-10 justify-between {blurStyle} transition-all duration-500">
			<div class="space-y-1.5 flex flex-col md:w-3/4">
				<p>Sign up to my newsletter</p>
				<p class="texts-07">I regularly share my professional or personal updates on substack!</p>
				<form on:submit|preventDefault={sendMail} class="flex space-x-2">
					<input
						class="bg-[#4F4F4F] p-3 w-full rounded-lg ring-0 placeholder-white/50 flex text-white outline-none"
						placeholder="Enter your email address"
						type="email"
						bind:value={email}
						disabled={buttonDisabled}
						required
					/>
					<button class="bg-[#4F4F4F] p-3 px-7 rounded-lg text-white flex" disabled={buttonDisabled}>Subscribe</button>
				</form>
			</div>
			<div
				class="md:flex hidden justify-center items-center bg-[#808080]/5 rounded-2xl w-[108px] h-[108px] my-auto"
			>
				<img class="h-7 w-7" src={Inbox} alt="" />
			</div>
		</div>
</div>

<style>
	.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>