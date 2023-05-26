<script>
	import Inbox from '../images/inbox.png';
	// import { env } from '$app/environment';
	import Toast from './Toast.svelte';
	let state = 'development';
	const api = () => {
		if (state === 'development') {
			return 'http://localhost:3000';
		} else if (state === 'production') {
			return 'https://api.mert.day';
		}
	};

	let data = {
		email: null
	};

	let messages = [];

	async function fetching() {
		fetch(`${api()}/mail`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(data)
		})
			.then((response) => {
				response.text().then((text) => {
					response.status === 200 ? console.log('Success') : console.log('Error');
					console.log(text);
					messages.push({
						emoji: '👋',
						message: text
					});
					messages = messages;
				});
			})
			.catch((error) => {
				console.error('İstek hatası:', error);
			});
	}

	$: if (messages.length > 0) {
		setTimeout(() => {
			messages = messages.slice(1);
		}, 5000);
	}
</script>

{#key messages}
	{#if messages.length > 0}
		<div class="fixed bottom-4 right-0 m-5 space-y-3">
			{#each messages as message}
				<Toast data={message} />
			{/each}
		</div>
	{/if}
{/key}

<div class="flex bg-[#808080]/5 w-full p-6 rounded-3xl gap-10 justify-between">
	<div class="space-y-1.5 flex flex-col md:w-3/4">
		<p>Sign up to my newsletter</p>
		<p class="texts-07">I regularly share my professional or personal updates on substack!</p>
		<div class="flex space-x-2">
			<input
				on:input={(e) => (data.email = e.target.value.trim())}
				class="bg-[#4F4F4F] p-3 w-full rounded-lg ring-0 placeholder-white/50 flex text-white"
				placeholder="email adress"
				type="email"
				name=""
				id=""
			/>
			<button on:click={() => fetching()} class="bg-[#4F4F4F] p-3 px-7 rounded-lg text-white flex"
				>Subscribe</button
			>
		</div>
	</div>
	<div class="md:flex hidden justify-center items-center bg-[#808080]/5 aspect-square rounded-2xl">
		<img class="h-7 w-7" src={Inbox} alt="" />
	</div>
</div>
