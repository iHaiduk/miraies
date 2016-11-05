/**
 * Created by igor on 05.11.16.
 */

export default {
    elements: [
        {
            type: 'module',
            name: 'header',
            options: {}
        },
        {
            type: 'section',
            name: 'default',
            options: {
                view: 'header',
                elements: [
                    {
                        "type": "component",
                        "name": "icon",
                        "options": {
                            name: "arrow-down",
                            element: "down",
                            width: 35
                        }
                    },
                    {
                        "type": "component",
                        "name": "icon",
                        "options": {
                            name: "arrow-down",
                            element: "down",
                            width: 35
                        }
                    },
                    {
                        "type": "component",
                        "name": "icon",
                        "options": {
                            name: "arrow-down",
                            element: "down",
                            width: 35
                        }
                    }
                ]
            }
        }
    ]
}