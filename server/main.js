import { Meteor } from 'meteor/meteor';

import { Posts } from '/server/collections/posts';

Meteor.startup(() => {

    const { GraphQLSchema, GraphQLList, GraphQLObjectType, GraphQLString } = GraphQL.types;

    let _Posts = new GraphQLObjectType({
        name: 'Posts',
        fields: () => ({
            _id: {type: GraphQLString},
            name: {type: GraphQLString}
        })
    });

    const query = new GraphQLObjectType({
        name: 'Blog',
        fields: () => ({
            _id: {type: GraphQLString},
            posts: {
                type: new GraphQLList(_Posts),
                resolve() {
                    return Posts.find({}).fetch();
                }
            },
        })
    });

    const schema = new GraphQLSchema({
        query,
    });

    GraphQL.registerSchema('Blog', schema);

});
