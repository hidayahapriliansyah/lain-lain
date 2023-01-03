const renderHeader = () => {
  const headerElement = document.querySelector('header');
  headerElement.innerHTML = `
    <nav class="nav">
    <ul class="menus">
      <li>
        <a href="/" class="btn-menu">Home</a>
      </li>
      <li>
        <span class="btn-menu change-location"></span>
        <form class="form-change-loc" method="GET">
          <table>
            <thead>
              <tr>
                <td colspan="2" class="cta-change-loc"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label for="city" class="city-title"></label>
                </td>
                <td>
                  <input type="text" class="city-search" id="city" name="city" autocomplete="off" required/>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="country" class="country-title"></label>
                </td>
                <td>
                  <input type="text" class="country-search" id="country" name="country" autocomplete="off" />
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <button type="submit" class="submit-search-btn"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </li>
    </ul>
  </nav>
  <div class="hamburger">
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
  `;
};

export default renderHeader;
