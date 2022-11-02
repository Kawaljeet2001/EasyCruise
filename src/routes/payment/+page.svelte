<script>
	import OrderSummary from '../../lib/Payment/OrderSummary.svelte';
	let paymentMethod = false;
</script>

<div class="h-screen w-full flex flex-col bg-white items-center py-12 z-30 absolute top-0">
	<div class="w-8/12 h-5/6 grid grid-cols-12 shadow-lg mt-8">
		<div class="col-span-7 bg-gray1 py-20 px-16">
			<h3 class="text-2xl font-bold">Payment method</h3>
			<div class="mt-8">
				<div class="bg-white rounded-md p-4 flex flex-col items-center shadow-sm my-2">
					<div class="flex items-center w-full">
						<input type="radio" name="payment" value="UPI" bind:group={paymentMethod} />
						<p class="text-lg ml-4">UPI</p>
					</div>
					<div class="{paymentMethod == 'UPI' ? 'flex' : 'hidden'} items-center w-full py-3 px-4">
						<input
							type="text"
							name="payment"
							placeholder="enter upi id"
							value=""
							class="bg-gray-100 py-2 px-4 rounded-sm"
						/>
						<button
							class="bg-blue-500 hover:bg-blue-600 text-white p-2 font-medium text-sm rounded-sm ml-2 px-4"
							>Verify</button
						>
					</div>
				</div>

				<div class="bg-white rounded-md p-4 flex flex-col items-center shadow-sm my-2">
					<div class="flex items-center w-full">
						<input
							type="radio"
							name="payment"
							value="Credit/Debit Card"
							bind:group={paymentMethod}
						/>
						<p class="text-lg  ml-4">Credit/Debit Card</p>
					</div>
					<div
						class="{paymentMethod == 'Credit/Debit Card'
							? 'flex flex-col'
							: 'hidden'}  w-full mt-2 p-4"
					>
						<div class="my-2 w-full grid gap-x-4 grid-cols-12">
							<div class="col-span-3 flex items-center justify-center rounded-md h-16 shadow-lg">
								<img
									src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
									alt="visa"
									class="scale-90"
								/>
							</div>
							<div class="col-span-3 flex items-center justify-center rounded-md h-16 shadow-lg">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOzV-yJbOArFimtOy8YBRI3b-zQOLT26IDkeiM6TdQivj_W0KN28m1v7CmYVNlDjM7LI&usqp=CAU"
									alt="visa"
									class="scale-100"
								/>
							</div>
							<div class="col-span-3 flex items-center justify-center rounded-md h-16 shadow-lg">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
									alt="visa"
									class="scale-75"
								/>
							</div>
							<div class="col-span-3 flex items-center justify-center rounded-md h-16 shadow-lg">
								<img
									src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-logo.png"
									alt="visa"
									class="scale-75"
								/>
							</div>
						</div>
						<h3 class="mt-6 text-sm text-gray-500">Cardholder name</h3>
						<input type="text" class="w-full mt-2 rounded-md p-2 border border-gray-200" />
						<div class="mt-8 grid grid-cols-12 gap-x-2">
							<div class="flex flex-col col-span-8">
								<h3 class="text-sm text-gray-500">Card number</h3>
								<input type="text" class="w-full mt-2 rounded-md p-2 border border-gray-200" />
							</div>
							<div class="flex flex-col col-span-2">
								<h3 class="text-sm text-gray-500">Date</h3>
								<input type="text" class="w-full mt-2 rounded-md p-2 border border-gray-200" />
							</div>
							<div class="flex flex-col col-span-2">
								<h3 class="text-sm text-gray-500">CCV</h3>
								<input type="text" class="w-full mt-2 rounded-md p-2 border border-gray-200" />
							</div>
						</div>

						<p class="text-xs text-gray-400 mt-4">
							*Credit Card payments may take upto 24h to be processed.
						</p>
					</div>
				</div>
				<div class="bg-white rounded-md p-4 flex items-center shadow-sm my-2">
					<input type="radio" name="payment" value="Net Banking" bind:group={paymentMethod} />
					<p class="text-lg  ml-4">Net Banking</p>
				</div>
			</div>
		</div>
		<OrderSummary paymentMethod = {paymentMethod}/>
	</div>
</div>
