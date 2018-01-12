package Person;

import java.util.HashMap;

public class Person {
    HashMap<String, Object> attributes = new HashMap<String, Object>();

    public Person(String name, int age, int height, int weight, String eyeColour, String gender){
        attributes.put("name", name);
        attributes.put("age", age);
        attributes.put("height", height);
        attributes.put("weight", weight);
        attributes.put("eyeColour", eyeColour);
        attributes.put("gender", gender);
    }

    public Object getAttribute(String attribute) {
        return attributes.get(attribute);
    }
    public void setAttribute(String attribute, Object value) {
        attributes.put(attribute, value);
    }
}
