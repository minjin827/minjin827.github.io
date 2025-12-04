# GitHub Pages 이력서

정보보안·보안컨설팅·보안 엔지니어 포지션을 위한 단일 페이지 이력서 템플릿입니다. `index.html`과 경량 CSS/JS만으로 구성되어 GitHub Pages에서 바로 배포할 수 있습니다.

## 디렉터리 구조

```
.
├── index.html                 # 메인 이력서 페이지
├── assets
│   ├── css/style.css          # 전체 스타일 정의
│   ├── js/main.js             # 내비게이션, 인터랙션 스크립트
│   └── downloads/.gitkeep     # 프로젝트 PDF를 둘 위치
└── README.md
```

## 콘텐츠 수정 방법

- **텍스트/이미지**: `index.html`에서 섹션별 내용을 찾아 직접 수정합니다. Hero, 프로필, 학력, 프로젝트, Skills, 자격증, Contact 순으로 배치되어 있습니다.
- **프로젝트 PDF**: `assets/downloads/security-projects.pdf` 경로를 사용합니다. 실제 PDF를 이 위치에 덮어쓰면 다운로드 버튼이 자동으로 최신 파일을 제공하게 됩니다.
- **색상/레이아웃**: `assets/css/style.css` 상단의 CSS 변수를 수정하면 쉽게 팔레트를 변경할 수 있습니다.
- **간단한 인터랙션**: `assets/js/main.js`에서 메뉴 토글, 스크롤 애니메이션, 연도 표기를 제어합니다.

## 로컬 미리보기

정적 사이트이므로 별도 빌드 과정이 필요 없습니다. 다음 방법 중 하나로 확인할 수 있습니다.

```bash
# Python
python -m http.server 8000
# 또는 VS Code Live Server, serve 등 정적 웹서버 도구를 활용
```

브라우저에서 `http://localhost:8000`을 열어 변경사항을 확인합니다.

## GitHub Pages 배포

1. 이 폴더를 새 GitHub 저장소에 푸시합니다. 예) `my-security-resume`.
2. GitHub에서 **Settings → Pages**로 이동합니다.
3. **Branch**를 `main`, **Folder**를 `/ (root)`로 선택하고 저장합니다.
4. 수 분 후 `https://<username>.github.io/<repo>/` 형태의 주소로 배포됩니다. 사용자 페이지(`username.github.io`)로 쓰려면 저장소 이름을 `username.github.io`로 지정하고 동일하게 설정하면 됩니다.

## 추가 팁

- **섹션 추가**: 동일한 `.section` 구조를 복사하여 사용하면 스타일 일관성이 유지됩니다.
- **다국어 지원**: Hero 영역에 언어 스위치를 추가하거나 별도의 `data-i18n` 속성을 부여해 확장할 수 있습니다.
- **접근성**: 모든 인터랙션 요소는 키보드/스크린리더 대응을 고려했습니다. 추가 요소도 `aria-*` 속성을 유지하며 확장해주세요.

필요한 내용은 자유롭게 덮어써서 활용하시면 됩니다. 문제가 있다면 언제든지 수정 요청 주세요. 즐거운 배포 되세요!

