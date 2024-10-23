async function main() {
    const {results, info} = await fetchUserDetails();
    displayUser(results, info);
}
main();