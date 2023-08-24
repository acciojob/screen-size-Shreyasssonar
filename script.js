//your JS code here. If required.
   function updateSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const widthValue = document.getElementById("widthValue");
      const heightValue = document.getElementById("heightValue");
      
      widthValue.textContent = width;
      heightValue.textContent = height;
    }
    
    window.addEventListener("resize", updateSize);
    updateSize(); // Initial call to set the initial window size
    
    // Prevent the default behavior of the 'resize' event to minimize browser performance issues
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSize, 250);
    });