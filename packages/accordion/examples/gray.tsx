import { useState } from 'react';
import { AccordionHeader, Accordion } from '@/packages/accordion';

export const AccordionGrayColor = () => {
  const [accordionId, setAccordionId] = useState('');

  const toggleCollapse = (id) => () => {
    setAccordionId((prevState) => (prevState !== id ? id : ''));
  };

  return (
    <div className="mb-12">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-6">
        Gray header
      </h2>
      <AccordionHeader
        id="item-1"
        accordionId={accordionId}
        variant="gray"
        onClick={toggleCollapse('item-1')}
        downIcon={<AngleDownIcon className="mt-1 h-4" />}
        upIcon={<AngleUpIcon className="mt-1 h-4" />}
      >
        Accordion Group Item #1
      </AccordionHeader>
      <Accordion id="item-1" isOpen={accordionId}>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </Accordion>
      <AccordionHeader
        id="item-2"
        accordionId={accordionId}
        variant="gray"
        onClick={toggleCollapse('item-2')}
        downIcon={<AngleDownIcon className="mt-1 h-4" />}
        upIcon={<AngleUpIcon className="mt-1 h-4" />}
      >
        Accordion Group Item #2
      </AccordionHeader>
      <Accordion id="item-2" isOpen={accordionId}>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi.
        </p>
      </Accordion>
      <AccordionHeader
        id="item-3"
        accordionId={accordionId}
        variant="gray"
        onClick={toggleCollapse('item-3')}
        downIcon={<AngleDownIcon className="mt-1 h-4" />}
        upIcon={<AngleUpIcon className="mt-1 h-4" />}
      >
        Accordion Group Item #3
      </AccordionHeader>
      <Accordion id="item-3" isOpen={accordionId}>
        <p className="mb-4">
          dales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
          Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
          mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
          porttitor. Morbi lectus risus, iaculis.
        </p>
        <p>
          Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
          Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante.
        </p>
      </Accordion>
    </div>
  );
};

const AngleUpIcon = (props) => (
  <svg
    fill="white"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
  </svg>
);

const AngleDownIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="white"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
  </svg>
);