<template>
    <div class="login">
        <h1>약관 동의</h1>
        <div class="join-step02">
            <dl>
                <dt>
                    <Checkbox />
                    <label> 모두 동의 </label>
                </dt>
                <dd>
                    <ul>
                        <li>
                            <Checkbox />
                            <label> (필수)이용약관동의 </label>
                        </li>
                        <li>
                            <Checkbox />
                            <label> (필수)개인정보수집동의 </label>
                        </li>
                        <li>
                            <Checkbox />
                            <label> (필수)만14세이상입니다. </label>
                        </li>
                        <li>
                            <Checkbox />
                            <label> (선택)마케팅 활용 동의 </label>
                        </li>
                        <li>
                            <Checkbox />
                            <label> (선택)평생회원 동의 </label>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
        <div class="login__btn">
            <Button label="취소" severity="secondary" outlined />
            <Button label="다음" />
        </div>
    </div>
</template>
