import { ref } from "vue";

export interface AppPayload {
    key: string,
    title: string,
    name: string,
    payload: string,
    documentation: {
      key: string,
      title: string,
      type: string,
      default: string,
      description: string,
    }[],
    events: string[]
  }
  
  export interface AppAction {
    key: string,
    title: string,
    name: string,
    payloads: AppPayload[],
    events: string[]
  }

  export function getEmptyAction(): AppAction {
    return {
      key: '',
      title: '',
      name: '',
      payloads: [],
      events: [],
    }
  }
  
  export const actions = ref<AppAction[]>([
    {
      key: '1',
      title: 'Подключиться',
      name: 'connect',
      payloads: [
        {
          key: '1',
          name: 'var1',
          title: 'Вариант 1',
          payload: `{ "key": "value" }`,
          documentation: [
            {
              key: 'key',
              title: 'Ключ',
              type: 'string',
              default: 'value',
              description: '',
            }
          ],
          events: ['connected'],
        },
      ],
      events: ['connected'],
    },
    {
      key: '2',
      title: 'Отключиться',
      name: 'disconnect',
      payloads: [
        {
          key: '1',
          name: 'var1',
          title: 'Вариант 1',
          payload: `{ "key": "value" }`,
          documentation: [
            {
              key: 'key',
              title: 'Ключ',
              type: 'string',
              default: 'value',
              description: '',
            }
          ],
      events: ["disconnected"],
        }
      ],
      events: ["disconnected"],
    },
    {
      key: '3',
      title: 'Добавить строку',
      name: 'add_row',
      payloads: [{
        key: '1',
        name: 'var1',
        title: 'Добавить раздел',
        payload: `{ "project_id": "11111", "title": "Заголовок" }`,
        documentation: [
          {
            key: 'project_id',
            title: 'ID проекта',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'title',
            title: 'Заголовок',
            type: 'string',
            default: 'Заголовок',
            description: '',
          }
        ],
      events: ['row_added'],
  
      }, {
        key: '2',
        name: 'var2',
        title: 'Добавить вид работ',
        payload: `{ "project_id": "11111", "section_id": "222222", "title": "Заголовок" }`,
        documentation: [
          {
            key: 'project_id',
            title: 'ID проекта',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'section_id',
            title: 'ID вид работ',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'title',
            title: 'Заголовок',
            type: 'string',
            default: 'Заголовок',
            description: '',
          }
        ],
      events: ['row_added'],
      }, {
        key: '3',
        name: 'var3',
        title: 'Добавить номенклатуру',
        payload: `{ "project_id": "11111", "section_id": "222222", "work_id": "333333", "title": "Заголовок" }`,
        documentation: [
          {
            key: 'project_id',
            title: 'ID проекта',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'section_id',
            title: 'ID вид работ',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'work_id',
            title: 'ID вида работ',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'title',
            title: 'Заголовок',
            type: 'string',
            default: 'Заголовок',
            description: '',
          }],
      events: ['row_added'],
        },
      ],
      events: ['row_added'],
    }
  ]);
  
  export const events = ref<AppPayload[]>([
    {
      key: 'connected',
      title: 'Подключено',
      name: 'connected',
      payload: `{}`,
      documentation: [],
      events: [],
    },
    {
      key: 'disconnected',
      title: 'Отключено',
      name: 'disconnected',
      payload: `{}`,
      documentation: [],
      events: [],
    },
    {
      key: 'row_added',
      title: 'Добавлена строка',
      name: 'row_added',
      payload: `{ "project_id": "11111", "section_id": "222222", "work_id": "333333", "title": "Заголовок" }`,
      documentation: [
        {
          key: 'project_id',
          title: 'ID проекта',
          type: 'string',
          default: 'xxx-xxx-xxx',
          description: '',
        },
        {
          key: 'section_id',
          title: 'ID вид работ',
          type: 'string',
          default: 'xxx-xxx-xxx',
          description: '',
        },
        {
          key: 'work_id',
          title: 'ID вида работ',
          type: 'string',
          default: 'xxx-xxx-xxx',
          description: '',
        },
        {
          key: 'title',
          title: 'Заголовок',
          type: 'string',
          default: 'Заголовок',
          description: '',
        }
      ],
      events: [],
    }
  ]);
  