'use strict';

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const openMobileNav = document.querySelector('.sidebar-header');
const closeDesNav = document.querySelector('.bookmark-logo');
const navLink = document.querySelectorAll('.nav-list');
const contentheader1 = document.querySelector('.content-header1');
const contentheader2 = document.querySelector('.content-header2');
const contentheader3 = document.querySelector('.content-header3');
const content1El = document.querySelector('.content1');
const content2El = document.querySelector('.content2');
const content3El = document.querySelector('.content3');
const contentFeatures1 = document.querySelector('.features-details1');
const contentFeatures2 = document.querySelector('.features-details2');
const contentFeatures3 = document.querySelector('.features-details3');

const bg_animation = document.querySelector('.features');

// Mobile Navigation
openMenu.addEventListener('click', function () {
  closeDesNav.style.display = 'none';
  openMenu.style.display = 'none';
  openMobileNav.classList.remove('hidden-nav');
});

closeMenu.addEventListener('click', function () {
  closeDesNav.style.display = 'block';
  openMenu.style.display = 'block';
  openMobileNav.classList.add('hidden-nav');
});

navLink.forEach(function (item) {
  item.addEventListener('click', function () {
    closeDesNav.style.display = 'block';
    openMenu.style.display = 'block';
    openMobileNav.classList.add('hidden-nav');
  });
});

// Features Section toggle on and off
contentheader1.addEventListener('click', function () {
  content1El.style.setProperty('--before-display', 'block');
  content2El.style.setProperty('--before-display', 'none');
  content3El.style.setProperty('--before-display', 'none');

  contentFeatures1.style.display = 'flex';
  contentFeatures2.style.display = 'none';
  contentFeatures3.style.display = 'none';
});

contentheader2.addEventListener('click', function () {
  content2El.style.setProperty('--before-display', 'block');
  content1El.style.setProperty('--before-display', 'none');
  content3El.style.setProperty('--before-display', 'none');

  contentFeatures1.style.display = 'none';
  contentFeatures2.style.display = 'flex';
  contentFeatures3.style.display = 'none';

  bg_animation.style.setProperty('--before-display', 'none');
  bg_animation.style.setProperty('--before-display', 'block');
});

contentheader3.addEventListener('click', function () {
  content3El.style.setProperty('--before-display', 'block');
  content1El.style.setProperty('--before-display', 'none');
  content2El.style.setProperty('--before-display', 'none');

  contentFeatures1.style.display = 'none';
  contentFeatures2.style.display = 'none';
  contentFeatures3.style.display = 'flex';
});

// FAQ Function;
const firstAnswer = document.querySelector('.answer');
const questions = document.querySelectorAll('.faq-quest');
const closeAnswer = document.querySelectorAll('.close-faq');
const switch_icon = document.querySelectorAll('.open-faq');

questions.forEach((question, i) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    if (answer.style.display === 'block') {
      // close it
      answer.style.display = 'none';
      switch_icon[i].style.display = 'block';
      closeAnswer[i].style.display = 'none';
    } else {
      // reset everything
      document.querySelectorAll('.answer').forEach(ans => {
        ans.style.display = 'none';
      });

      document.querySelectorAll('.open-faq').forEach(icon => {
        icon.style.display = 'block';
      });

      document.querySelectorAll('.close-faq').forEach(icon => {
        icon.style.display = 'none';
      });

      // open the clicked one
      answer.style.display = 'block';
      switch_icon[i].style.display = 'none';
      closeAnswer[i].style.display = 'block';
    }
  });
});

// Email Validation
document.getElementById('email-form').addEventListener('submit', function (e) {
  e.preventDefault(); // stop reload
  const errorMessage = document.querySelector('.email-error-message');
  const errorImage = document.querySelector('.error-img');
  const emailInput = document.querySelector('.email');
  let email = document.getElementById('email').value;
  // console.log('Submitted email:', email);
  // console.log(errorMessage);

  if (!email) {
    errorMessage.style.display = 'block';
    errorImage.style.display = 'block';
    errorMessage.textContent = `Whoops, make sure it's not empty`;
    emailInput.classList.add('email-error');
    emailInput.classList.remove('email-success');
    errorMessage.style.backgroundColor = 'hsl(0, 94%, 66%)';

    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMessage.style.display = 'block';
    errorImage.style.display = 'block';
    errorMessage.textContent = `Whoops, make sure it's an email`;
    emailInput.classList.add('email-error');
    emailInput.classList.remove('email-success');
    errorMessage.style.backgroundColor = 'hsl(0, 94%, 66%)';
  } else {
    errorImage.style.display = 'none';
    errorMessage.style.display = 'block';
    errorMessage.textContent = '✅ Success! Your email has been submitted.';
    errorMessage.style.backgroundColor = 'green';
    emailInput.classList.remove('email-error');
    emailInput.classList.add('email-success');
  }
});
