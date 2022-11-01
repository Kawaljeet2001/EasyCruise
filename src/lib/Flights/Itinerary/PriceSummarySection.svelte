<script>
	import { onMount } from "svelte";
	import {finalPayabaleAmount} from "../../../stores/store.js";

	export let details;

	let totalPrice = null;
	let tax = null;

	const getGSTFromPrice = (price, num, rate) => {
		//determine rate percentage of price
		price = Number(price);
		num = Number(num);
		price *= num;
		return (price * rate) / 100;
	};

	const getTotalPrice = (price, num, rate) => {
		price = Number(price);
		num = Number(num);
		var baseOriginal = price * num;
		tax = getGSTFromPrice(price, num, rate);

		totalPrice = baseOriginal + tax;
		return baseOriginal + tax;
	};

    const formatPrice = (price) => {
        var nfObject = new Intl.NumberFormat('en-US');
        var output = nfObject.format(price);
        return output;
    }

    onMount(() => {
        var finalPrice = getTotalPrice(details.details.ticketPrice, details.numOfTravellers, 18)
		finalPayabaleAmount.set(finalPrice);
    })

</script>

<div class="col-span-3">
	<div class="w-full flex flex-col justify-between h-20v border border-gray-200 rounded-sm p-6">
		<div class="flex flex-col">
			<h3 class="flex items-center justify-between">
				Total Price <span class="font-extrabold"
					>&#8377; {formatPrice($finalPayabaleAmount)}</span
				>
			</h3>
			<p class="flex items-center mt-2 justify-between text-xs text-gray-400">
				{details.numOfTravellers} adults
			</p>
		</div>
		<div class="pt-3 border-t border-gray-200">
			<p class="flex items-center justify-between text-xs text-gray-400">
				Base Fare (1 Traveller) <span>&#8377; {formatPrice(Number(details.details.ticketPrice))}</span>
			</p>
			<p class="flex items-center justify-between text-xs text-gray-400 mt-2">
				Taxes (GST) <span
					>&#8377; {formatPrice(tax)} </span
				>
			</p>
		</div>
	</div>
</div>
