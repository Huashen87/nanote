import Select from 'react-select';
import { FlexRow } from '../components/styles';

interface FilterProps {
  titleOptions: OptionProps[];
  filter: FilterType;
  setFilter: Function;
}

export interface FilterType {
  keyword: KeywordType;
  orderBy: orderBy;
}

interface KeywordType {
  tag?: string;
  title?: string;
}

type orderBy = 'recommend' | 'time' | 'time-reverse';

interface OptionProps {
  label: string;
  value: string;
}

function Filter(props: FilterProps) {
  const { titleOptions, filter, setFilter } = props;
  const tagsOptions: OptionProps[] = [
    { value: 'tags-Test', label: 'Test' },
    { value: 'tags-Test2', label: 'Test2' },
    { value: 'tags-Test3', label: 'Test3' },
    { value: 'tags-Test4', label: 'Test4' },
  ];
  const options: OptionProps[] = [...titleOptions, ...tagsOptions];

  const handleOnChange = (e: { value: string; label: string } | null) => {
    const value = e?.value || '';
    if (value.indexOf('title-') === 0)
      return setFilter({ ...filter, keyword: { title: value.substring(6) } });
    if (value.indexOf('tags-') === 0)
      return setFilter({ ...filter, keyword: { tags: value.substring(5) } });
  };

  const orderOption: OptionProps[] = [
    {
      label: '推薦順序(預設)',
      value: 'recommend',
    },
    {
      label: '時間(由新到舊)',
      value: 'time',
    },
    {
      label: '時間(由舊到新)',
      value: 'time-reverse',
    },
  ];

  const handleOnorderChange = (e: { value: string; label: string } | null) => {
    const value = e?.value || '';
    setFilter({ ...filter, orderBy: value });
  };

  const selectStyle = {
    menu: (style: any) => ({
      ...style,
      marginTop: '3px',
    }),
    container: (style: any) => ({
      ...style,
      width: 'calc(62% - 10px)',
      margin: '5px auto',
    }),
  };

  const orderStyle = {
    menu: (style: any) => ({
      ...style,
      marginTop: '3px',
    }),
    container: (style: any) => ({
      ...style,
      width: 'calc(38% - 10px)',
      margin: '5px auto',
    }),
  };

  return (
    <FlexRow width="calc(100% - 30px)">
      <Select
        styles={selectStyle}
        isClearable
        options={options}
        placeholder="輸入標題或標籤"
        onChange={handleOnChange}
        noOptionsMessage={() => '沒有任何搜尋結果'}
      />
      <Select
        isSearchable={false}
        styles={orderStyle}
        options={orderOption}
        defaultValue={orderOption[0]}
        onChange={handleOnorderChange}
      />
    </FlexRow>
  );
}

export default Filter;
