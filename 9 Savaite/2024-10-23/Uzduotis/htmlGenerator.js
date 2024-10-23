function displayUser(user, seed){
    const person = user[0];
    const html =  
    `
            <div class="box">
                <div class="user">
                    <img src="${person.picture.medium}" alt="">
                    <div class="user-details">
                        <h2>${person.name.title} ${person.name.first} ${person.name.last}</h2>
                        <p>#${seed.seed.toUpperCase()}</p>
                    </div>
                </div>
                <div class="about">
                    <h4>About</h4>
                    <p><i class="bi bi-telephone"></i> Phone: <span>${person.phone}</span></p>
                    <p><i class="bi bi-envelope"></i> Email: <span>${person.email}</span></p>
                </div>
                <div class="address">
                    <h4>Address</h4>
                    <p><i class="bi bi-map"></i> Address: <span>${person.location.street.number} ${person.location.street.name}, ${person.location.city}</span></p>
                    <p><i class="bi bi-building"></i> State: <span>${person.location.state}, ${person.location.country}</span></p>
                    <p><i class="bi bi-geo-alt"></i> Postcode: <span>${person.location.postcode}</span></p>
                </div>
                <div class="details">
                    <h4>Details</h4>
                    <p><i class="bi bi-person"></i> Gender: <span>${person.gender}</span></p>
                    <p><i class="bi bi-calendar"></i> Age: <span>${person.dob.age}</span></p>
                </div>
                <div class="account">
                    <h4>Account details</h4>
                    <p><i class="bi bi-person-vcard"></i> Username: <span>${person.login.username}</span></p>
                    <p><i class="bi bi-lock"></i> Password: <span>${person.login.password}</span></p>
                </div>
            </div>
    `
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = html;

}