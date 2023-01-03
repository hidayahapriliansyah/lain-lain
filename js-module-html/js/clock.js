const clock = () => {
  setInterval(() => {
    const time = new Date();
    console.log(time);
  }, 1000);
};

export default clock;