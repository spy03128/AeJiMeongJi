package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.exception.ExpireAuthNumberException;
import com.ssafy.aejimeongji.domain.entity.redis.PhoneAuth;
import com.ssafy.aejimeongji.domain.repository.PhoneAuthRepository;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Random;

@Slf4j
@Service
@Transactional(readOnly = true)
public class PhoneAuthService {

    private final String apiKey;
    private final String apiSecret;
    private final PhoneAuthRepository phoneAuthRepository;
    private final Message coolSms;
    private final Random rand  = new Random();

    public PhoneAuthService(@Value("${coolsms.apiKey}") String apiKey, @Value("${coolsms.apiSecret}") String apiSecret, PhoneAuthRepository phoneAuthRepository) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.phoneAuthRepository = phoneAuthRepository;
        this.coolSms = new Message(apiKey, apiSecret);
    }

    @Transactional
    public String sendMessage(String phoneNumber) throws CoolsmsException {
        String authNumber = makeAuthNum();
        coolSms.send(makeParams(phoneNumber, authNumber));
        return phoneAuthRepository.save(new PhoneAuth(authNumber)).getId().toString();
    }

    public boolean verifyAuthNumber(String phoneUUID, String authNumber) throws ExpireAuthNumberException {
        PhoneAuth phoneAuth = phoneAuthRepository.findById(phoneUUID).orElseThrow(() ->
            new ExpireAuthNumberException(String.valueOf(Long.valueOf(phoneUUID)))
        );
        return authNumber.equals(phoneAuth.getAuthNumber()) ? true : false;
    }

    private String makeAuthNum() {
        String authNum = "";
        for(int i=0; i<6; i++) {
            authNum += Integer.toString(rand.nextInt(10));;
        }
        return authNum;
    }

    private HashMap<String, String> makeParams(String phoneNumber, String authNumber) {
        HashMap<String, String> params = new HashMap<>();
        params.put("to", phoneNumber); // 수신 전화번호
        params.put("from", "01063230351"); // 발신 전화번호
        params.put("type", "sms");
        params.put("text", " 인증번호는 [" + authNumber + "] 입니다.");
        return params;
    }
}
