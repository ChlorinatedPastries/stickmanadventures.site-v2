async function getData() { //get the file
  const url = "/AssetPack/JS/links.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    result = await response.json();
    window.links = result;          //needs to be a global var
    console.log(window.links); //works in here
  } catch (error) {
    console.error(error.message);
  }
};
getData();
console.log(window.links);//returns undefined out here
const links = JSON.parse(window.links); 
console.log(links);
console.log(links.categories);