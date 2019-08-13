import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
import TagItem from 'components/molecules/tag-item/TagItem';
import { CommonStore, ArticleStore } from "stores/index";

const PopularTags = observer(props => {
  const commonStore = useContext(CommonStore);
  const articleStore = useContext(ArticleStore);

  const selectTag = tag => {
    const tagItem = {
      tabName: `# ${tag}`,
      key: 'tag',
      authRequired: false,
      isActive: false,
      onClick: key => { 
        commonStore.selectTabMenu(key);
        articleStore.getArticleList({tag});
      },
    }
    commonStore.addTabMenu(tagItem);
    commonStore.selectTabMenu('tag');
    articleStore.getArticleList({tag});
  }

  const tagList = () => {
    return commonStore.tagList.map((tag, index) => {
      return <TagItem tagName={tag} onClick={() => {selectTag(tag)}} key={index}/>
    })
  };

  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {tagList()}
      </div>
    </div>
  );
});

export default PopularTags;
