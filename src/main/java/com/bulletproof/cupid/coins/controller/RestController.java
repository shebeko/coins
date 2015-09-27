package com.bulletproof.cupid.coins.controller;

import com.bulletproof.cupid.coins.domain.Coin;
import com.bulletproof.cupid.coins.service.CoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class RestController {
    @Autowired
    CoinService service;

    @RequestMapping(value = "/coins/{id}", method = RequestMethod.GET)
    public @ResponseBody Coin fetch(@PathVariable("id") Long id) {
        return service.fetch(id);
    }

    @RequestMapping(value = "/coins/{id}", method = RequestMethod.PUT)
    public @ResponseBody Coin update(@RequestBody Coin coin, @PathVariable("id") int id) {
        service.update(coin);
        System.out.println(coin.toString());
        return coin;
    }

    @RequestMapping(value = "/coins/{id}", method = RequestMethod.DELETE)
    public @ResponseBody String delete(@PathVariable("id") Long id) {
        service.delete(id);
        return "{'code': 200}";
    }
}