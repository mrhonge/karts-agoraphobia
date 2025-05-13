import sectionsData from '../data/sections';
import React from 'react';
import AuthorSection from '../components/AuthorSection';

export default function Section6() {
  const section = sectionsData[6];
  
  // 이미지 갤러리 데이터
  const practiceImages = [
    '/practice-image/image1.jpg',
    '/practice-image/image2.jpg',
    '/practice-image/image3.jpg',
    '/practice-image/image4.jpg',
    '/practice-image/image5.jpg',
    '/practice-image/image6.jpg',
    '/practice-image/image7.jpg',
    '/practice-image/image8.jpg',
  ];
  
  const globalStyles = `
    .content-body p {
      margin-bottom: 20px;
    }
    .content-body p:last-child {
      margin-bottom: 0;
    }
  `;
  
  // 정아 작가의 콘텐츠
  const jeongaContent = (
    <>
      <p><strong>"우리는 광장을 이야기합니다."</strong></p>
      <p>아끼고 사랑하는 친구들이 모여 써 내려간 광장 이야기. 
        이 작품과 프로덕션을 처음 만났을 때, 제게 가장 먼저 다가온 감정은 두려움이었습니다. 
        반 년이 넘는 시간 동안 광장이 무엇인지 깊이 고민해 온 그들 앞에서, 제 스스로가 너무나 무지하게 느껴졌습니다.</p>
      <p>그래서 모두가 모이는 연습실은 제게 늘 하나의 광장이었습니다. 
        광장을 너무도 잘 알고 있는 이들 앞에서 '모르는 나'를 드러낸다는 것은, 생각보다 훨씬 더 무서운 일이었거든요.</p>
      <p>하지만 연습을 이어가며, 그리고 작품 속 수많은 광장의 사람들을 만나며 '모르는 나' 혹은 '두려워하는 나' 또한 
        광장을 이루는 하나의 원소가 되는 모습을 보았습니다. 작품 속 존재들이 두려움에 떨고, 화를 내고, 외치고, 슬퍼하고, 
        또 웃을 때마다 저는 광장 속 저를 바라볼 수 있었습니다. 멀게만 느껴졌던 그 광장의 이야기가 어느새 성큼 제 앞에 서 있었습니다.</p>
      <p>지금도 저에게 연습실은 여전히 광장입니다. 그러나 이제는 내 목소리를 낼 수 있고, 모르는 것들은 물어볼 수 있으며, 
        나의 이야기를 기꺼이 꺼내놓고 싶은 광장이 되었습니다.</p>
      <p>그리고 극장에서 저희의 광장을 마주할 여러분 또한 광장이 우리에게 건네는 그 힘을 느낄 수 있기를 진심으로 바랍니다.</p>
    </>
  );
  
  // 한이령 작가의 콘텐츠
  const haniryeongContent = (
    <>
      <p>맨 처음, 우리는 광장에 대한 뒷담으로 이야기를 시작했습니다.</p>
      <p>너도 있고 나도 있고. 그런데 없었던 것도 같고. 그 새끼까지 있다는 게 좀 짜증은 나지만, 
        결국은 그래서 광장이 아닌가, 하는 것에 대해 말이에요. 
        우리는 그렇게 우리의 이야기 속 광장을 들여다보고, 그것을 여러분에게 가장 잘 보여줄 수 있는 방법을 고민했습니다. </p>
      <p>그 시간동안 적잖은 방황을 겪으며 가장 신기했던 것은, 그토록 함께 헤매이면서도 본래 우리가 정해둔 목적지가 어디였는지를 잊지 않고 
        계속해서 환기시켜주는 팀원들의 모습이었어요. 장면에 대한 고민이 깊어지고 이 곳이 어디인지 점점 모르겠을 때 즈음이 오면, 
        귀신같이 결국 우리가 말하려는 바는 무엇이었는지를 원점으로 돌아가 되짚어주는 팀원들이 있었습니다.</p>
      <p>덕분에 길을 잃을까 하는 두려움 없이 헤매임을 온전히 즐길 수 있었고, 하나의 지점을 동일한 지향으로 두고 함께 고민한다는 것이 
        얼마나 근사한 일인지를 알게 되어서 내가 이들 속에서 느낀 안전함과 광장에 대한 고민을 객석에서도 경험할 수 있기를, 
        시간이 지날수록 점점 원하게 되었습니다.</p>
      <p>그러다보면 나는 이들이 알려준 것처럼 우리가 처음 찍었던 지향점을 다시 떠올려보게 됩니다.<br />
        광장이란 무엇인가?<br />
        모두에게 열려 있다고는 하지만 사실은 두려운 그곳에 대해<br />
        하고 싶은 말과 듣기 싫은 말이 모두 있는 그곳에 대해<br />
        온갖 양면성은 홀로 몽땅 끌어안고 있는 것 같은 그곳에 대해.</p>
      <p>광장의 조각을 끼워맞추려 노력한 지난 8주동안 나는 내가 비로소 나의 광장을 갖게 된다면 우리 팀을 닮은 곳이었으면 좋겠다고, 
        기어이에는 생각하게 되었습니다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <style jsx global>{globalStyles}</style>
        
        <AuthorSection 
          authorInfo="조연출 이정아 (연극원 연출과 예술사 21)"
          sectionIndex={1}
        >
          {jeongaContent}
        </AuthorSection>

        <AuthorSection 
          authorInfo="조연출 한이령 (연극원 연출과 예술사 24)" 
          isLast={true}
          sectionIndex={2}
          showSlider={true}
          sliderImages={practiceImages}
          sliderTitle="작품 제작 과정"
        >
          {haniryeongContent}
        </AuthorSection>
      </div>
    )
  };
} 