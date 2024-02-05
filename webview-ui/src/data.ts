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
    },
     {
      key: '4',
      name: 'add_contract',
      title: 'Добавить договор',
      events: [],
      payloads: [
        {
          payload: `{
            "section_id": "c477f047-2665-",
            "type_id": "68ef4ce2-",
            "nomenclature_id": "d851cb79-8c43-",
            "contractor": "OOO Проекты",
            "contract_date": "23.02.2024",
            "price": 100,
            "volume": 1,
            "amount": 99,
            "file_ids": []
        }`,
        documentation: [
          {
            key: 'section_id',
            title: 'ID раздела',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'type_id',
            title: 'ID вида работ',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'nomenclature_id',
            title: 'ID номенклатуры',
            type: 'string',
            default: 'xxx-xxx-xxx',
            description: '',
          },
          {
            key: 'contractor',
            title: 'Контрагент',
            type: 'string',
            default: 'OOO Проекты',
            description: '',
          },
          {
            key: 'contract_date',
            title: 'Дата договора',
            type: 'string',
            default: '23.02.2024',
            description: '',
          },
          {
            key: 'price',
            title: 'Стоимость',
            type: 'int',
            default: '100',
            description: '',
          },
          {
            key: 'volume',
            title: 'Объем',
            type: 'int',
            default: '1',
            description: '',
          },
          {
            key: 'amount',
            title: 'Сумма',
            type: 'int',
            default: '99',
            description: '',
          },
          {
            key: 'file_ids',
            title: 'Файлы',
            type: 'string[]',
            default: '[]',
            description: '',
          },
        ],
        events: [],
        key: 'add_contract',
        name: 'add_contract',
        title: 'Добавить договор',
        },
      ]
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
  