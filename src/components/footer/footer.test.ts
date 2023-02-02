import { Footer } from './footer';

describe('Footer', () => {
  it('renders the correct template', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const footer = new Footer('#root');
    expect(footer.template).toEqual(`
    <footer class="footer">
      <address>ISDI Coders</address>
    </footer>`);
  });

  it('renders the template correctly in the DOM', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const footer = new Footer('#root');
    footer.render();
    expect(document.body.innerHTML).toEqual(`<div id="root">
    <footer class="footer">
      <address>ISDI Coders</address>
    </footer>
</div>`);
  });
});
