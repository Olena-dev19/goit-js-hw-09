let formData = {
    email: '',
    message: '',
};

const formEl = document.querySelector('.feedback-form');


document.addEventListener('DOMContentLoaded', () => {
  let lsData = getFromLS('feedback-form-state');
  try {
      formData = lsData || {};
      formEl.elements.email.value = lsData.email;
      formEl.elements.message.value = lsData.message;
  } catch {
  }
  
});


formEl.addEventListener('input', (e) => {
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;

    formData.email = email;
    formData.message = message;

    saveToLS('feedback-form-state', formData);
});






formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    if (email == '' || message == '') {
        alert('Fill please all fields');
        return;
    } else {
      console.log(formData);
      
    }
    localStorage.removeItem('feedback-form-state');
    formEl.reset();
    formData = { email: '', message: '', };
})



function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }
  
  function getFromLS(key, defaultValue) {
    const jsonData = localStorage.getItem(key);
    try {
      const data = JSON.parse(jsonData);
      return data;
    } catch {
      return defaultValue || jsonData;
    }
};