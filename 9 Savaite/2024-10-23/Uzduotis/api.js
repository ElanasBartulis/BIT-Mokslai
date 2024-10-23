async function fetchUserDetails() {
    const promise = await fetch('https://randomuser.me/api/');
    const response = await promise.json();
    return response;
}