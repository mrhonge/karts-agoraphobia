// 출연진 프로필
import React from 'react';
import Image from 'next/image';

// 팝업 컴포넌트 분리
const ActorImagePopup = ({ actor, onClose }) => {
  if (!actor) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-image-container">
          <Image 
            src={actor.path} 
            alt={actor.name}
            width={600}
            height={720}
            className="modal-image"
          />
        </div>
        <div className="modal-info">
          <h3 className="actor-title">{actor.name} | {actor.role}</h3>
          <p className="actor-edu">{actor.education}</p>
        </div>
      </div>
      
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal-content {
          background-color: white;
          border-radius: 10px;
          padding: 1.5rem;
          position: relative;
          max-width: 90%;
          max-height: 90vh;
          text-align: center;
        }
        
        .modal-close {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
          color: #333;
        }
        
        .modal-image-container {
          max-height: 80vh;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .modal-image {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        
        .modal-info {
          margin-top: 1rem;
          text-align: center;
        }
        
        .actor-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .actor-edu {
          color: #666;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
};

// 그리드 컴포넌트
const ActorGrid = ({ actors, onSelectActor }) => {
  return (
    <div className="actor-grid">
      {actors.map((actor, index) => (
        <div 
          key={index} 
          className="actor-card"
          onClick={() => onSelectActor(actor)}
        >
          <div className="actor-image-container">
            <Image 
              src={actor.path} 
              alt={actor.name}
              width={200}
              height={240}
              className="actor-image"
            />
          </div>
          <div className="actor-info">
            <h3 className="actor-name">{actor.name} | {actor.role}</h3>
            <p className="actor-education">{actor.education}</p>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        .actor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .actor-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .actor-card:hover {
          transform: translateY(-5px);
        }
        
        .actor-image-container {
          width: 200px;
          height: 240px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 1rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .actor-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .actor-info {
          width: 100%;
        }
        
        .actor-name {
          font-size: 1.1rem;
          margin: 0;
          font-weight: 600;
        }
        
        .actor-education {
          color: #666;
          font-size: 0.9rem;
          margin: 0.2rem 0 0 0;
        }
      `}</style>
    </div>
  );
};

// 메인 컴포넌트 - 클래스 컴포넌트로 변경
class ActorSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedActor: null
    };
  }
  
  handleSelectActor = (actor) => {
    this.setState({ selectedActor: actor });
  }
  
  handleCloseModal = () => {
    this.setState({ selectedActor: null });
  }
  
  render() {
    const { selectedActor } = this.state;
    
    return (
      <div className="section-content">
        
        <ActorGrid actors={this.props.actors} onSelectActor={this.handleSelectActor} />
        
        {selectedActor && (
          <ActorImagePopup actor={selectedActor} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default function Section8() {
  const actorImages = [
    {
      name: '김예슬',
      role: '코러스장',
      education: '외부',
      path: '/actors/김예슬.png'
    },
    {
      name: '이정은',
      role: '배우',
      education: '연극원 연기과 예술사 졸업',
      path: '/actors/이정은.png'
    },
    {
      name: '이승연',
      role: '배우',
      education: '연극원 연기과 예술사 22',
      path: '/actors/이승연.png'
    },
    {
      name: '이산하',
      role: '배우',
      education: '연극원 연기과 예술사 졸업',
      path: '/actors/이산하.png'
    },
    {
      name: '예지민',
      role: '배우',
      education: '연극원 연기과 예술사 21',
      path: '/actors/예지민.png'
    },
    {
      name: '민동혁',
      role: '배우',
      education: '연극원 연기과 예술사 졸업',
      path: '/actors/민동혁.png'
    },
    {
      name: '나윤희',
      role: '배우',
      education: '연극원 연기과 예술사 졸업',
      path: '/actors/나윤희.png'
    }
  ];

  return {
    title: "출연진 프로필",
    content: <ActorSection actors={actorImages} />
  };
} 