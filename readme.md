# 카페인 디자인 시스템

<a href="https://653134b8c1b776a14aafb1d0-dxkagydeos.chromatic.com/">📚 스토리북 보기</a>

## Welcome 👋🏻

> 위 링크를 클릭하시면 카페인 디자인 시스템 스토리북을 보실 수 있습니다. 스토리북 좌측 메뉴를 클릭해 다양한 컴포넌트를 테스트해 보세요.<br />
> 컨트롤러를 통해 컴포넌트를 직접 조작할 수 있습니다.
> 설명을 먼저 읽은 뒤 조작하면 더 이해하기 쉬울 것입니다.<br />
> 모든 컴포넌트들은 css 속성을 가지고 있습니다. css 속성으로 직접 스타일을 적용할 수 있습니다.<br />
> 각 속성에 마우스를 올리면 그 속성의 설명, 기본값 등을 확인할 수 있습니다.<br />

### Npm

언제든지 설치하여 프로젝트에 사용하실 수 있습니다.
<a href="https://www.npmjs.com/package/yummy-design-component" target="\_blank">&nbsp; Link</a>

#### Wait!

    1. 단위는 rem입니다.
    2. Flex Box에서 Flex Item을 사용하면 Flex 속성을 더 다양하게 사용하실 수 있습니다.

<br />

### Layout

레이아웃 배치를 편하게 할 수 있게 도와주는 컴포넌트들입니다.

<h4 >Box</h4>
<p className="sb-section-item-paragraph">가장 기본이 되는 컴포넌트입니다. 컴포넌트를 감싸거나 간격을 줄 때 사용합니다.</p>

<h4 >Flex Box</h4>
<p className="sb-section-item-paragraph">CSS Flex 속성을 이용해 자식 컴포넌트들을 유연하게 배열할 수 있습니다.</p>

<h4 >Flex Item</h4>
<p className="sb-section-item-paragraph">
  ❗Flex Box의 자식 컴포넌트입니다. 각각의 너비와 위치 등을 조절할 수 있습니다.
</p>

<br />

## Tab

Tab 메뉴를 편하게 만들 수 있습니다. 반드시 아래의 모양대로 만들어 주세요.

```ts
// Tab이 최상위 부모
<Tab id="아이디">
  // Tab 메뉴들
  <Tab.Menus>
    {Array.from({length: 4}, ((_, index) => <Tab.Menu key={index} label={`메뉴 ${index}`} index={index} />))}
  </Tab.Menus>

  // 각 Tab에 들어갈 내용
  {Array.from({length: 4}, (_, index) => <Tab.Content key={index} index={index}>
      내용 {index}
    </Tab.Content>)}
</Tab>;
```

<h4>Tab</h4>
<p className="sb-section-item-paragraph">간편하게 Tab을 구현할 수 있는 컴포넌트입니다.</p>
<h4 className="sb-section-item-heading">Menus</h4>
<p className="sb-section-item-paragraph">Menu의 부모 컴포넌트입니다. 반드시 Menu를 감싸야 합니다.</p>

<h4 className="sb-section-item-heading">Menu</h4>
<p className="sb-section-item-paragraph">
  Menus의 자식 컴포넌트들입니다. 각 메뉴의 이름 등을 정할 수 있습니다.
</p>
<h4 className="sb-section-item-heading">Content</h4>
<p className="sb-section-item-paragraph">
  각 탭에 들어갈 내용입니다.
</p>
