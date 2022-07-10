import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        porttitor venenatis tellus. Aliquam mollis erat nibh, ac tempus tortor
        gravida vel. Nunc enim orci, porta vitae tincidunt id, accumsan sed
        orci. Morbi nec interdum ante. Quisque dictum risus non mollis commodo.
        Nam ac porttitor tellus. Praesent ut nisi arcu. In nisi tellus, luctus
        ac pharetra in, lobortis luctus quam. Curabitur rhoncus dictum libero,
        ac ultricies elit volutpat nec. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam porta accumsan augue nec bibendum. Sed nibh
        neque, mattis a velit vulputate, ornare efficitur quam. Nam ut orci
        ullamcorper, malesuada augue ut, pharetra mauris. Ut sollicitudin lorem
        et leo fermentum scelerisque.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        porttitor venenatis tellus. Aliquam mollis erat nibh, ac tempus tortor
        gravida vel. Nunc enim orci, porta vitae tincidunt id, accumsan sed
        orci. Morbi nec interdum ante. Quisque dictum risus non mollis commodo.
        Nam ac porttitor tellus. Praesent ut nisi arcu. In nisi tellus, luctus
        ac pharetra in, lobortis luctus quam. Curabitur rhoncus dictum libero,
        ac ultricies elit volutpat nec. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam porta accumsan augue nec bibendum. Sed nibh
        neque, mattis a velit vulputate, ornare efficitur quam. Nam ut orci
        ullamcorper, malesuada augue ut, pharetra mauris. Ut sollicitudin lorem
        et leo fermentum scelerisque.
      </p>
      <Link href="/about">
        <a className={styles.btn}>See About Page</a>
      </Link>
    </div>
  );
}
