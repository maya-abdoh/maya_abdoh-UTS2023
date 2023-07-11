
async function getUserInfo() {
  const userIdInput = document.getElementById("userId");
  const userId = userIdInput.value;

  if (userId === "") {
    alert("Please enter a user ID");
    return;
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    const nameCell = document.getElementById("name");
    const userNameCell = document.getElementById("userName");
    const emailCell = document.getElementById("email");
    const cityCell = document.getElementById("city");
    const streetCell = document.getElementById("street");
    const zipcodeCell = document.getElementById("zipcode");
    const userResultCell = document.getElementById("userResult");

    if (user.id) {
      nameCell.textContent = user.name;
      userNameCell.textContent = user.username;
      emailCell.textContent = user.email;
      cityCell.textContent = user.address.city;
      streetCell.textContent = user.address.street;
      zipcodeCell.textContent = user.address.zipcode;
      userResultCell.textContent = "User Found";
      userResultCell.style.color = "green";
    } else {
      nameCell.textContent = "";
      userNameCell.textContent = "";
      emailCell.textContent = "";
      cityCell.textContent = "";
      streetCell.textContent = "";
      zipcodeCell.textContent = "";
      userResultCell.textContent = "User Not Found";
      userResultCell.style.color = "red";
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching user info.");
  }
}

  async function getImageInfo() {
  const imageIdInput = document.getElementById("imageId");
  const imageId = imageIdInput.value;

  if (imageId === "") {
    alert("Please enter an image ID");
    return;
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${imageId}`);
    const image = await response.json();

    const albumIdCell = document.getElementById("albumId");
    const imageCell = document.getElementById("image");
    const imageResultCell = document.getElementById("imageResult");

    if (image.id) {
      albumIdCell.textContent = image.albumId;
      imageCell.innerHTML = `<img src="${image.url}" alt="Image" title="${image.title}" />`;
      imageResultCell.textContent = "Image Found";
      imageResultCell.style.color = "green";
    } else {
      albumIdCell.textContent = "";
      imageCell.innerHTML = `<img src="path/to/image_not_found.jpg"  />`;
      imageResultCell.textContent = "Image Not Found";
      imageResultCell.style.color = "red";
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching image info.");
  }
}
function resetForm() {
  const userIdInput = document.getElementById("userId");
  const nameCell = document.getElementById("name");
  const userNameCell = document.getElementById("userName");
  const emailCell = document.getElementById("email");
  const cityCell = document.getElementById("city");
  const streetCell = document.getElementById("street");
  const zipcodeCell = document.getElementById("zipcode");
  const userResultCell = document.getElementById("userResult");

  userIdInput.value = "";
  nameCell.textContent = "";
  userNameCell.textContent = "";
  emailCell.textContent = "";
  cityCell.textContent = "";
  streetCell.textContent = "";
  zipcodeCell.textContent = "";
  userResultCell.textContent = "";
}

function reset() {
  const imageIdInput = document.getElementById("imageId");
  const albumIdCell = document.getElementById("albumId");
  const imageCell = document.getElementById("image");
  const imageResultCell = document.getElementById("imageResult");

  imageIdInput.value = "";
  albumIdCell.textContent = "";
  imageCell.innerHTML = "";
  imageResultCell.textContent = "";
}

