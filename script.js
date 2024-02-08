const feedbacks = [
    {
      image: "images/image-1.jpg",  
      name: "Andy Jassy",
      designation: "CEO of Amazon",
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      image: "images/image-2.jpg",
      name: "Sundar Pichai",
      designation: "CEO, Alphabet Inc.",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
    },
    {
      image: "images/image-3.jpg",  
      name: "Satya Nadella",
      designation: "CEO, Microsoft",
      feedback:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];
  let i = 0;
  let j = feedbacks.length;
  
  let testimonialCont = document.getElementById("testimonial-cont");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  
  let showTestimonial = () => {
    testimonialCont.innerHTML = `
      <p>${feedbacks[i].feedback}</p>
      <img src=${feedbacks[i].image}>
      <h3>${feedbacks[i].name}</h3>
      <h6>${feedbacks[i].designation}</h6>
    `;
  };

  prev.addEventListener("click", () => {
    i = (j + i - 1) % j;
    showTestimonial();
  });
  next.addEventListener("click", () => {
    i = (j + i + 1) % j;
    showTestimonial();
  });
  
  window.onload = showTestimonial;

  const feedbacks1 = [
    {
      image: "images/image-4.jpg",  
      name: "Bill Gates",
      designation: "Co-founder of Microsoft",
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      image: "images/image-5.jpg",
      name: "Larry Page",
      designation: "Co-founder of Google.",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
    },
    {
      image: "images/image-6.jpg",  
      name: "Jeff Bezoz",
      designation: "Co-founder of Amazon",
      feedback:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];  

  let i1 = 0;
  let j1 = feedbacks1.length;
  
  let testimonialCont1 = document.getElementById("testimonial-cont1");
  let prev1 = document.getElementById("prev1");
  let next1 = document.getElementById("next1");
  
  let showTestimonial1 = () => {
    testimonialCont1.innerHTML = `
      <p>${feedbacks1[i1].feedback}</p>
      <img src=${feedbacks1[i1].image}>
      <h3>${feedbacks1[i1].name}</h3>
      <h6>${feedbacks1[i1].designation}</h6>
    `;
  };

  prev1.addEventListener("click", () => {
    i1 = (j1 + i1 - 1) % j1;
    showTestimonial1();
  });
  next1.addEventListener("click", () => {
    i1 = (j1 + i1 + 1) % j1;
    showTestimonial1();
  });
  
  window.onload = showTestimonial1;