import Heading from "../components/Heading";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Heading heading="About us" />
      <p>
        Etiam a magna et diam faucibus placerat ac in tortor. Mauris eu odio
        justo. Integer fringilla placerat tortor, non laoreet erat sagittis in.
        Proin tincidunt enim lorem, nec porta mi ullamcorper ac. Proin viverra
        euismod blandit. Nunc blandit pretium tincidunt. In ut velit venenatis,
        commodo leo sed, vehicula lorem. Cras gravida turpis at nisl interdum,
        in consequat massa gravida. Sed arcu sem, vulputate sit amet euismod in,
        efficitur sit amet nunc. Curabitur condimentum fermentum pharetra.
      </p>
      <Image src="/totoro.jpeg" alt="Totoro" width={800} height={500} />
    </>
  );
};

export default AboutUs;
