import {
  ClickTimer,
  DebouncedLogger,
  FocusTracker,
  PreviousInput,
  WebSocketLogger,
} from "features/index";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Lesson 5</p>
        <h1 className={styles.title}>Примеры useRef</h1>
      </header>

      <div className={styles.list}>
        <section className={styles.section} aria-labelledby="task-click-timer">
          <div className={styles.sectionHead}>
            <span className={styles.badge}>Задание 1</span>
            <h2 id="task-click-timer" className={styles.sectionTitle}>
              ClickTimer
            </h2>
          </div>
          <div className={styles.sectionBody}>
            <ClickTimer />
          </div>
        </section>

        <section className={styles.section} aria-labelledby="task-previous-input">
          <div className={styles.sectionHead}>
            <span className={styles.badge}>Задание 2</span>
            <h2 id="task-previous-input" className={styles.sectionTitle}>
              PreviousInput
            </h2>
          </div>
          <div className={styles.sectionBody}>
            <PreviousInput />
          </div>
        </section>

        <section className={styles.section} aria-labelledby="task-focus-tracker">
          <div className={styles.sectionHead}>
            <span className={styles.badge}>Задание 3</span>
            <h2 id="task-focus-tracker" className={styles.sectionTitle}>
              FocusTracker
            </h2>
          </div>
          <div className={styles.sectionBody}>
            <FocusTracker />
          </div>
        </section>

        <section
          className={styles.section}
          aria-labelledby="task-debounced-logger"
        >
          <div className={styles.sectionHead}>
            <span className={styles.badge}>Задание 4</span>
            <h2 id="task-debounced-logger" className={styles.sectionTitle}>
              DebouncedLogger
            </h2>
          </div>
          <div className={styles.sectionBody}>
            <DebouncedLogger />
          </div>
        </section>

        <section
          className={styles.section}
          aria-labelledby="task-websocket-logger"
        >
          <div className={styles.sectionHead}>
            <span className={styles.badge}>Задание 5</span>
            <h2 id="task-websocket-logger" className={styles.sectionTitle}>
              WebSocketLogger
            </h2>
          </div>
          <div className={styles.sectionBody}>
            <WebSocketLogger />
          </div>
        </section>
      </div>
    </main>
  );
};
