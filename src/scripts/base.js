document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    const isMobileUserAgent = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    };

    if (isMobileUserAgent()) {
      let canvas = document.getElementById("game");
      if (canvas !== null) {
        canvas.outerHTML = "<p>Game is not playable on mobile! Sorry!<p>";
      }
    }
  }
};
