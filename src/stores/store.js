import { writable } from "svelte/store";

export const user = writable(null);
export const finalPayabaleAmount = writable(0);
export const state = writable({
    finalPayabaleAmount : 0
})

export const ticketBookingDetails = writable({});