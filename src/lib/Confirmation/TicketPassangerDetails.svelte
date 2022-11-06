<script>
    export let data;

</script>
<div class="shadow-shadow2 h-20v gap-x-0 lg:gap-x-4 p-6 col-span-2 lg:col-span-1 rounded-sm grid grid-cols-2">
    <div class="col-span-2 lg:col-span-1 flex flex-col">
        <p class="text-sm text-gray-300">Passanger</p>
        <h2 class="mt-1 font-medium text-lg">{data.firstName + " " + data.lastName}</h2>
    </div>
    <div class="col-span-1 lg:col-span-1 flex flex-col lg:pl-24">
        <p class="text-sm text-gray-300 mr-1">Gender</p>
        <h2 class="mt-1 font-medium text-lg">{data.gender}</h2>
    </div>
    <div class="col-span-1 lg:col-span-1 flex flex-col lg:mt-4">
        <p class="text-sm text-gray-300 mr-1">Food Preference</p>
        <h2 class="mt-1 font-medium text-lg">{data.foodPreference}</h2>
    </div>
</div>