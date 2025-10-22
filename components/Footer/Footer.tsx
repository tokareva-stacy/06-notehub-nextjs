import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Yaroslav Kuzmin</p>
          <p>
            Contact us:&nbsp;
            <a href="mailto:kuzminyaroslav13@gmail.com">
              kuzminyaroslav13@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
