console.log("Should send a cookie or so");

async function getCookie() {
  const res = await axios.get("/cookie");
  const hopefullyMe = res.data;
  console.log("Should be me", hopefullyMe);

  const wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = `<p>Email from Cookie: ${hopefullyMe.email}</p>`;
}

async function setCookie() {
  try {
    await axios.post("/cookie", { email: "thecookie@monster.com" });
    alert("Cookie set");
  } catch (err) {
    alert("Cookie not set :(");
    console.error(err);
  }
}
