import Image from "../../../node_modules/next/image";
import { SignInButton } from "../SignInButton/index";
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" width={100} height={100} alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
          </nav>

          <SignInButton />
      </div>
    </header>
  )
}