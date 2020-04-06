import { FaVideo, FaFireAlt } from 'react-icons/fa';
import { IoIosRadioButtonOff } from 'react-icons/all';

export const portableTextElements = [
  { title: 'Текст', value: 'normal' },
  { title: 'Заголовок H1', value: 'h1' },
  { title: 'Заголовок H2', value: 'h2' },
  { title: 'Заголовок H3', value: 'h3' },
  { title: 'Заголовок H4', value: 'h4' },
  { title: 'Крупный текст', value: 'blockquote' },
];

export const bodyPortableText = {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Post body',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: portableTextElements,
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }],
        annotations: annotations,
      },
    },
    {
      type: 'customImage',
      title: 'Изображение',
    },
    {
      type: 'smallText',
      title: 'Мелкий текст',
    },
    {
      type: 'actionButton',
      icon: IoIosRadioButtonOn,
      title: 'Кнопка',
    },
    {
      type: 'actionBlock',
      icon: FaFireAlt,
      title: 'Выделенный блок',
    },
    {
      type: 'youtube',
      icon: FaVideo,
      title: 'Видео',
    },
    {
      type: 'registerButton',
      icon: IoIosRadioButtonOff,
      title: 'Кнопка регистрации на вебинар',
    },
  ],
};
