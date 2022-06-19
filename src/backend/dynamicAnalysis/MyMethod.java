package backend.dynamicAnalysis;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class MyMethod {
    public int id;
    public String name;
    public Map<String, Object> params;
    public MyMethod parent;
    private List<MyMethod> children;

    public MyMethod(int id, String name, Map<String, Object> params, MyMethod parent) {
        this.id = id;
        this.name = name;
        this.params = params;
        this.parent = parent;
        children = new LinkedList<>();
    }

    // converts data to json format
    public void toJson() {

    }

    public void addChild(MyMethod child) {
        children.add(child);
    }
}
