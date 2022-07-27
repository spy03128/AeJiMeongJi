package com.ssafy.aejimeongji.domain.entity.redis;

import lombok.Getter;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import javax.persistence.Id;

@Getter
@RedisHash(value = "phoneauth", timeToLive = 180)
public class PhoneAuth {

    @Id
    private Long id;
    private String authNumber;

    public PhoneAuth(String authNumber) {
        this.authNumber = authNumber;
    }
}
