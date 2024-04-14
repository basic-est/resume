import React from 'react'

const Main = () => {
    return (
        <div class="container">

            <div class="border-bottom">
                <div class="h2 pt-5" id="profile">プロフィール</div>
            </div>

            <table class="table">
                <tbody>
                    <tr>
                        <th class="ps-4">性別</th>
                        <td>男</td>
                    </tr>
                    <tr>
                        <th class="ps-4">年齢</th>
                        <td>38歳</td>
                    </tr>
                    <tr>
                        <th class="ps-4">居住地</th>
                        <td>東京都小平市（最寄り駅：西武新宿線 小川駅）</td>
                    </tr>
                    <tr>
                        <th class="ps-4">配偶者</th>
                        <td>あり</td>
                    </tr>
                </tbody>
            </table>

            <div class="border-bottom">
                <div class="h2 pt-5" id="career">経歴</div>
            </div>
            <div class="text-end mt-5">2020年04月 ~ 現職</div>
            <div class="h5">稼働エンジニアマネジメント兼研修講師業務</div>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th class="table-light">チーム規模</th>
                        <td>3-4名</td>
                    </tr>
                    <tr>
                        <th class="table-light">役割</th>
                        <td>リーダー</td>
                    </tr>
                    <tr>
                        <th class="table-light">技術</th>
                        <td>Java, Spring, HTML, CSS, MySQL, VBA, JavaScript, jQuery, git, JUnit</td>
                    </tr>
                    <tr>
                        <th class="table-light">詳細</th>
                        <td>
                            稼働するエンジニア(約90名)のマネジメント業務、採用面接業務、<br />
                            下記研修の講師業務および講師メンバーマネジメント業務を担当
                            <ul>
                                <li>Java研修（基本構文、オブジェクト指向、例外、Eclipseによる開発）</li>
                                <li>SQL研修（データベース概念、データの種類/型、検索/登録/更新/削除等）</li>
                                <li>Web研修（HTML/CSS、JavaScript、jQuery、Git）</li>
                                <li>Webアプリケーション研修（Spring Boot）</li>
                                <li>デバッグ、テスト研修（Eclipseデバッグツール+JUnit+テスト仕様書作成）</li>
                                <li>Androidアプリケーション開発研修（Android Studio+Java）</li>
                                <li>COBOL研修</li>
                                <li>VBA研修</li>
                                <li>Linux研修</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="text-end mt-5">2018年09月 ~ 2020年03月</div>
            <div class="h5">クレジットカードシステム保守開発</div>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th class="table-light">チーム規模</th>
                        <td>15名程度（プロジェクト全体:500名）</td>
                    </tr>
                    <tr>
                        <th class="table-light">役割</th>
                        <td>メンバー</td>
                    </tr>
                    <tr>
                        <th class="table-light">技術</th>
                        <td>COBOL,DB2,JCL</td>
                    </tr>
                    <tr>
                        <th class="table-light">詳細</th>
                        <td>
                            請求業務を管轄するサブシステムの保守開発チームに所属し各工程を担当<br />
                            担当案件：25件程度
                            <ul>
                                <li>外部設計（処理機能記述書等外部成果物の作成、修正実施）</li>
                                <li>内部設計（フローチャート、ＤＢ移行定義書等内部成果物の作成、修正実施）</li>
                                <li>製造（COBOL,JCL修正、新規のコーディング実施 開発モジュール数：20本程度）</li>
                                <li>テスト（単体から結合までの各テストケース作成、テスト実施）</li>
                                <li>本番検証（本場検証計画書作成および本番検証実施）</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="text-end mt-5">2016年02月 ~ 2018年08月</div>
            <div class="h5">営業活動支援およびテクニカルサポート業務</div>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th class="table-light">チーム規模</th>
                        <td>10名程度</td>
                    </tr>
                    <tr>
                        <th class="table-light">役割</th>
                        <td>メンバー</td>
                    </tr>
                    <tr>
                        <th class="table-light">技術</th>
                        <td>Excel,VBA,Notes/Domino,IBM Connections</td>
                    </tr>
                    <tr>
                        <th class="table-light">詳細</th>
                        <td>
                            ITソリューションを包括的に提供するサービスの営業活動支援<br />
                            現行の契約内容調査、提案内容作成、契約締結までの管理資料作成を担当<br />
                            数百万-数千万規模のITソリューション契約関連作業を月2-3案件並行して実施
                            <ul>
                                <li>契約内容調査・打合せ</li>
                                <li>提案資料作成</li>
                                <li>契約関連資料作成</li>
                                <li>電子帳票管理</li>
                                <li>VBAツールの作成、保守、運用</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="border-bottom">
                <div class="h2 pt-5" id="graduate">学歴</div>
            </div>
            <table class="table table-bordered mt-3">
                <tbody>
                    <tr>
                        <th class="table-light">学校名</th>
                        <td>明星大学</td>
                    </tr>
                    <tr>
                        <th class="table-light">学部学科・専攻</th>
                        <td>日本文化学部 言語文化学科</td>
                    </tr>
                    <tr>
                        <th class="table-light">在学期間</th>
                        <td>2004年4月 ~ 2008年3月 （浪人・留年無し）</td>
                    </tr>
                    <tr>
                        <th class="table-light">研究内容・実績等</th>
                        <td>近代文学の研究（宮沢賢治等）を行いつつ、<br />
                            並行してMOSや秘書検定を取得し、ビジネススキルを習得。<br />
                            また、趣味のアコースティックギター演奏を学園祭で発表するなど<br />
                            課外活動も精力的に行いました。
                        </td>
                    </tr>
                </tbody>
            </table>

            <a href="#">上に戻る</a>
        </div>
    )
}

export default Main